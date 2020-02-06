# iSwyd

This is the iSwyd project. Short for "I Saw What You Did". Pronounciation: aɪzwʌɪd (as in "eyes wide").

## Github Recording Demo on YouTube

[![ISWYD Github Record Demo](http://img.youtube.com/vi/EHuBAAKuRio/0.jpg)](http://www.youtube.com/watch?v=EHuBAAKuRio "ISWYD Github Recording Demo")

## Development mode

I suggest to use the docker-compose environment, as that is created for you to be able to run servvices separately, although you could reconfigure it to use different kafka or mongo instance, but why would you? So just run:

```shell
docker-compose up
```

This will launch all services in development mode, which means it'll fire up services through `lein-monolith`, and will launch `app`, `lib` and `worker` builds with figwheel. It'll also launch an nginx to proxy designated paths to services exposed.

It accessable on `http://0.0.0.0`

## TODO

- [x] Create the player to replay sessions
- [ ] Enhance player with seeker, toolbar, etc.
- [ ] Handle concurrent sessions, and navigating between them
- [ ] Stash resources to not use original assets
- [ ] Separate monolith subprojects for `lib`, `worker` and `api`
- [ ] Capture more user info (eg. screen size, location, etc.)
- [ ] Allow custom metadata for sessions
- [ ] Provide stats for regular and metadata
- [ ] Lift app components from core
- [ ] Write tests
- [ ] Manage production builds and release
