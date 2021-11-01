import { SET_SERVICE_NOTIFICATIONS, SET_SELECTED_TICKET, SET_SERVICE_NOTIFICATIONS_CONFIGURATIONS } from "../actionTypes/service-notification.actiontypes";
import _ from 'lodash';
import moment from 'moment';

const initialState = {
    notifications: [],
    selectedTicket: {},
    notificationsValues: [],
    loading: true,
    configurations: {}
};

const serviceNotificationReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case SET_SERVICE_NOTIFICATIONS: {
            const notifications = _.get(action.payload, 'notifications.data.data', [])
            const values = _.get(action.payload, 'notifications.data.ServiceNotifications.value.data', []);
            
            notifications[1].date = moment().format('DD/MM/YYYY');
            notifications[1].time = moment().format('hh:mm a');
            notifications[0].date = moment().format('DD/MM/YYYY');
            notifications[0].time = moment().format('hh:mm a');
            values[0].status = "DRAFT";
            return {
                ...state,
                notifications: notifications,
                notificationsValues: _.get(action.payload, 'notifications.data.ServiceNotifications.value.data', []),
                loading: false
            };
        }
        case SET_SELECTED_TICKET: {
            return {
                ...state,
                selectedTicket: action.payload.ticket,
            };
        }

        case SET_SERVICE_NOTIFICATIONS_CONFIGURATIONS: {
            return {
                ...state,
                configurations: action.payload.configurations,
            };
        }
        default:
            return state;
    }
};
export default serviceNotificationReducer;