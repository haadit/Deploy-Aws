FROM python:3.13-alpine

ADD backend/requirements.txt /app/requirements.txt

RUN pip install -r /app/requirements.txt
ADD backend /app

WORKDIR /app

ENTRYPOINT ["python"]

CMD ["app.py"]

FROM python:3.13-alpine

ADD requirements.txt /app/requirements.txt

RUN pip install -r /app/requirements.txt
ADD . /app

WORKDIR /app

ENTRYPOINT ["python"]

CMD ["app.py"]

