DRAFT
Project Description

### Given
1. Village
2. Citizens
3. Mayorship

### Hardware
1. OLinuXino LIME2-4GB
2. HSDPA 3G module


### Goals
1. sms gateway
2. pub-sub notification system
3. web app - administrator panel for the pub-sub notification system

### SMS max_len=160

## Communication rules
### Subscriber Topics
#### 1. Informatii generale - sms template: 'Caransebes info general Nume Prenume CNP'
#### 2. Prognoza meteo - sms template: 'Caransebes stare meteo Nume Prenume CNP'
#### 3. Notificari agricultori - sms template: 'Caransebes info agricultori Nume Prenume CNP'
#### 4. Notificari taxe si impozite - sms template: 'Caransebes taxe si impozite Nume Prenume CNP'

### SMS Queries
#### 5. Notificari program functionari - sms template: 'Caransebes orar primarie Nume Prenume CNP'

### SMS dialogue
#### 6. Notificare dinamica - sms template: 'Caransebes new topics Nume Prenume CNP'
#### 6.1 Response - sms template: 'topic1, topic2, topic3'
#### 6.2 Subscribe to new topic - sms template: 'Caransebes topic2 Nume Prenume CNP' 
