FROM python:3.9.4-slim
ENV PYTHONBUFFERED=1
WORKDIR /usr/src/app
COPY Pipfile Pipfile.lock ./
RUN pip install --upgrade pip && \
    pip install pipenv && \
    pipenv install --deploy --system
COPY . .
