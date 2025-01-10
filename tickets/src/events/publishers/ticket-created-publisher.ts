import { Publisher, Subjects, TicketCreatedEvent } from '@souvik150/tickets-common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}