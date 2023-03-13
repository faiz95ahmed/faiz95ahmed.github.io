# Infrastructure Upgrade

In order to allow the number of TTS servers to be scaled dynamically, I implemented some changes to the backend of the web platform, in addition to creating some new microservices. The backend of the platform was written in Python, using the Django framework.

Using my knowledge of Django, I was able to completely decouple the TTS server from the backend of the web platform, turning it from a synchronous system into an asynchronous system. Then, using Docker and Redis, I was able to modify the topology of the system to allow for new TTS servers to be added as necessary.