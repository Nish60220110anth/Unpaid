package main

import (
	"bufio"
	"context"
	"fmt"
	"io"
	"time"

	"github.com/segmentio/kafka-go"
)

func main() {
	my_topic_conn, _ := kafka.DialLeader(context.Background(), "tcp", "localhost:9092", "my_topic", 0)
	my_topic_conn.SetReadDeadline(time.Now().Add(time.Second * 10))
	defer my_topic_conn.Close()

	batch := my_topic_conn.ReadBatch(1e2, 1e3)
	//my_data := make([]byte, 1e3)
	//batch.Read(my_data)
	reader := bufio.NewReader(batch)
	my_all_data, _ := io.ReadAll(reader)
	fmt.Println(string(my_all_data))
}
