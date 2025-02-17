package service-1

default allow = false

allow {
    input.time >= "09:00:00"
    input.time < "18:00:00"
    input.user.role == "admin"
}

deny {
    input.user.role == "guest"
}