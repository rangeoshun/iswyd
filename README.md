# iSwyd

This is the iSwyd project. Short for "I Saw What You Did". Pronounciation: aɪwʌɪd like: "eyes wide".

## Development mode

I suggest to use the docker-compose environment, as that is created for you to be able to run servvices separately, although you could reconfigure it to use different kafka or mongo instance, but why would you? So just run:

```shell
docker-compose up
```

This will launch all services in development mode, which means it'll fire up services through `lein-monolith`, and will launch `app`, `lib` and `worker` builds with figwheel. It'll also launch an nginx to proxy designated paths to services exposed.

### App

It will run on `http://0.0.0.0`

## Building for production

Not yet solved.

## Tests

Did not have the time yet.
