# Research Recommandation System

## install mysql 

```bash
docker run --name mysql \
  -p 8306:3306 \
  -v $(pwd):/var/lib/mysql \
  -v /etc/localtime:/etc/localtime \
  -e MYSQL_ROOT_PASSWORD=project8 \
  -d mysql:8.0

```

## install redis

```bash
docker run \
  -p 8379:8379 \
  -v $(pwd)/conf/redis.conf:/usr/local/etc/redis/redis.conf \
  -v $(pwd)/data:/data --name redis \
  -d redis:6-alpine \
  redis-server /usr/local/etc/redis/redis.conf
```