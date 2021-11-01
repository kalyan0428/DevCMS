import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from "axios";
import { FETCH_SERVICE_NOTIFICATIONS, FETCH_SERVICE_NOTIFICATIONS_CONFIGURATIONS, CREATE_SERVICE_NOTIFICATIONS } from '../actionTypes/service-notification.actiontypes';
import { API_BASE_URL, API_TECH_BASE_ENDPOINT } from "../../utils/config";
import {setServiceNotifications, setSelectedTicket, setServiceNotificationsConfigurations} from '../actions/service-notification.actions'
import { Ticket } from '../../models/service-notification.model'

interface ServiceNotificationResponse{
    data: any
}

const getServiceNotifications = ():any => axios.get<any>(`${API_BASE_URL}/${API_TECH_BASE_ENDPOINT}/serviceNotifications`);
const getConfigurations= ():any => axios.get<any>(`${API_BASE_URL}/${API_TECH_BASE_ENDPOINT}/configurations`);

const createServiceNotificationAPI = (data:any):any => axios.post<any>(`${API_BASE_URL}/${API_TECH_BASE_ENDPOINT}/serviceNotifications`, data);


function* fetchServiceNotification() {
    try {
        const notifications: ServiceNotificationResponse = yield call(getServiceNotifications);
        yield put(setServiceNotifications(notifications));
    } catch ({ message }) {
        //yield put({ type: FETCH_TODOS_FAILED, message: message });
        console.log(message)
    }
}

function* fetchConfigurations() {
    try {
        const configurations: ServiceNotificationResponse = yield call(getConfigurations);
        yield put(setServiceNotificationsConfigurations(configurations.data.configurations));
    } catch ({ message }) {
        //yield put({ type: FETCH_TODOS_FAILED, message: message });
        console.log(message)
    }
}

function* createServiceNotification(data:any) {
    try {
        const response: ServiceNotificationResponse = yield call(createServiceNotificationAPI, data.payload);
    } catch ({ message }) {
        //yield put({ type: FETCH_TODOS_FAILED, message: message });
        console.log(message)
    }
}
// function* setSelectedItem(sagaObject:any) {
//     try {
//         const notifications: ServiceNotificationResponse = yield call(getServiceNotifications);
//         yield put(setSelectedTicket(sagaObject.payload.ticket));
//     } catch ({ message }) {
//         //yield put({ type: FETCH_TODOS_FAILED, message: message });
//         console.log(message)
//     }
// }
export default function* rootServiceNotificationSaga() {
    yield all([
        takeLatest(FETCH_SERVICE_NOTIFICATIONS, fetchServiceNotification),
        takeLatest(FETCH_SERVICE_NOTIFICATIONS_CONFIGURATIONS, fetchConfigurations),
        takeLatest(CREATE_SERVICE_NOTIFICATIONS, createServiceNotification)
        // takeLatest(FETCH_SERVICE_NOTIFICATIONS, setSelectedItem)
    ]);
}