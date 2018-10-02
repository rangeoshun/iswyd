# iSwyd

This is the iSwyd project. Short for "I Saw What You Did". Pronounciation: aɪwʌɪd like: "eyes wide".

## Development mode

I suggest to use the docker-compose environment, as that is created for you to be able to run servvices separately, although you could reconfigure it to use different kafka or mongo instance, but why would you? So just run:

```shell
docker-compose up
```

This will launch all services in development mode, which means it'll poll changes and refresh in case of an update.

## Building for production

Not yet solved.
