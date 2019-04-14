package main

import "net/http"

func main() {
	if err := http.ListenAndServe(":8080", http.FileServer(http.Dir(`C:\Users\flori\jocuri-corina`))); err != nil {
		panic(err)
	}
}
