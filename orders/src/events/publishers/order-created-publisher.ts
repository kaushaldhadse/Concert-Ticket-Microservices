import {Publisher, OrderCreatedEvent, Subjects} from "@souvik150/tickets-common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}