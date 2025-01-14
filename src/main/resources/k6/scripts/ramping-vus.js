import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    discardResponseBodies: true,
    scenarios: {
        contacts: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '40s', target: 10 },
                { duration: '20s', target: 0 },
            ],
            gracefulRampDown: '0s',
        },
    },
};

export default function () {
//    http.get('http://host.docker.internal:8080')
    http.get('http://fp-app:8080')
    sleep(0.5);
}