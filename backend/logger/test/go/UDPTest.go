package main

import (
	"bufio"
	"bytes"
	"encoding/binary"
	"fmt"
	"log"
	"net"
	"os"
	"strings"
)

func SendMessage(msg, address string, port int32) {
	data := new(bytes.Buffer)
	if err := binary.Write(data, binary.LittleEndian, port); err != nil {
		log.Fatalln(err)
	}

	conn, err := net.Dial("udp", net.JoinHostPort(address, data.String()))
	defer func(conn net.Conn) {
		err := conn.Close()
		if err != nil {
			log.Fatalln(err)
		}
	}(conn)

	if err != nil {
		log.Fatalln(err)
	}

	connWrapper := bufio.NewWriter(conn)
	if _, err := connWrapper.WriteString(msg); err != nil {
		log.Fatalln(err)
	}

	if err = connWrapper.Flush(); err != nil {
		log.Fatalln(err)
	}
}

func ReceiveMessage() {
	conn, _ := net.ListenUDP("udp4", &net.UDPAddr{
		IP:   net.ParseIP("127.0.0.1"),
		Port: 3000,
	})
	data := make([]byte, 65)

label:
	for {
		conn.Read(data)

		if bytes.Equal([]byte("quit-server"), data) {
			break label
		}

		fmt.Printf("Message %s\n", string(data))
	}
}

func main() {
	fmt.Println("Test Server Started")
	serType := os.Args[1]

	if strings.Compare(serType, "send") == 0 {
		fmt.Println("Send Server Type Requested")
		SendMessage(os.Args[2], "localhost", 41234)
	} else {
		fmt.Println("Receive Server Requested")
		ReceiveMessage()
	}
}
