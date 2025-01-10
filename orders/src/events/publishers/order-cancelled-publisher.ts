import {Subjects, Publisher, OrderCancelledEvent} from "@souvik150/tickets-common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

