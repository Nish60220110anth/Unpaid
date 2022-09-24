package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/segmentio/kafka-go"
)

func CheckError(err error) {
	if err != nil {
		log.Fatalln(err)
	}
}

func main() {
	topic_conn, err := kafka.DialLeader(context.Background(), "tcp", "localhost:9092", "sample_topic", 0)
	defer topic_conn.Close()
	CheckError(err)
	err = topic_conn.SetWriteDeadline(time.Now().Add(time.Second * 15))
	CheckError(err)
	var content []byte = []byte("Devansh is handsome boy")
	count, err := topic_conn.WriteMessages(kafka.Message{Value: content})
	CheckError(err)
	fmt.Println(fmt.Sprintf("Content count : %d", count))
}
