# :notebook_with_decorative_cover: Instruções

### :fire: Rodar os comandos abaixo:

:one: Instale uma imagem do Redis</br>
`ddocker run --name redis -p 6379:6379 -d -t redis:alpine`

:two: Instale uma imagem do Postgres</br>
`docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11`

:three: Instale uma imagem do MongoDB</br>
`docker run --name mongodb -p 27017:27017 -d -t mongo`

:four: Rodando as migrations</br>
`yarn typeorm migration:run`

:six: Clonar projeto</br>
`$ git clone https://github.com/MitchellSymington/gobarber-api.git`

:seven: Ir para o diretório </br>
`$ cd gobarber-api`

:eight: Instalar dependencias</br>
`$ yarn install`

:nine: Subir bancos com Docker</br>
`$ docker start database`</br>
`$ docker start mongobarber`</br>
`$ docker start redisbarber`</br>

:keycap_ten: Iniciar</br>
`$ yarn dev:server`</br>


