import {
    Subjects,
    Publisher,
    ExpirationCompleteEvent,
} from '@souvik150/tickets-common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}