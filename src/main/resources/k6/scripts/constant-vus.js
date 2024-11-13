import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    discardResponseBodies: true,
    scenarios: {
        contacts: {
            executor: 'constant-vus',
            vus: 10,
            duration: '1m',
        },
    },
};

export default function () {
//    http.get('http://host.docker.internal:8080')
    http.get('http://fp-app:8080')
    sleep(0.5);
}