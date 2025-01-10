# Concert Ticket Microservices API + Client
An NextJS+Node+Mongo+Redis app to buy and sell tickets for various concerts. It uses typescript and is built on 
microservices architecture. It implements infrastructure using k8s. Uses various deployments and services to 
implement the microservices architecture. It uses ingress-nginx as the ingress controller. It uses skaffold to bring 
everything together in dev environment. 
It uses the NATS streaming client. It also uses a custom NPM package to handle shared code b/w all the services. All 
the services have been tested by writing many unit and integration tests. It uses jest as the testing framework.

It is an event based microservices app. It has implementation of various concepts like cross service data 
replication, queuing system and handling of requests, optimization concurrency control, worker services, payments 
(stripe integration) and many more essential concepts of backend engineering.
