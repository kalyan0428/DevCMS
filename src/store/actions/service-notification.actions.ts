import { 
    FETCH_SERVICE_NOTIFICATIONS, 
    SET_SERVICE_NOTIFICATIONS, 
    SET_SELECTED_TICKET,
    SET_SERVICE_NOTIFICATIONS_CONFIGURATIONS,
    FETCH_SERVICE_NOTIFICATIONS_CONFIGURATIONS,
    CREATE_SERVICE_NOTIFICATIONS
} from '../actionTypes/service-notification.actiontypes'
import { Ticket } from '../../models/service-notification.model'
export const fetchServiceNotifications = (): any => ({
    type: FETCH_SERVICE_NOTIFICATIONS
});

export const setServiceNotifications = (notifications: any): any => ({
    type: SET_SERVICE_NOTIFICATIONS,
    payload: {
        notifications
    }
});

export const setSelectedTicket = (ticket: any): any => ({
    type: SET_SELECTED_TICKET,
    payload: {
        ticket
    }
});

export const fetchServiceNotificationsConfigurations = (): any => ({
    type: FETCH_SERVICE_NOTIFICATIONS_CONFIGURATIONS
});


export const setServiceNotificationsConfigurations = (configurations: any): any => ({
    type: SET_SERVICE_NOTIFICATIONS_CONFIGURATIONS,
    payload: {
        configurations
    }
});

export const createServiceNotification = (data: any): any => ({
    type: CREATE_SERVICE_NOTIFICATIONS,
    payload: {
        data
    }
});

// export const fetchAlarmPostsSuccess = (payload: any) => ({
//     type: FETCH_ALARM_POST_SUCCESS,
//     payload
// });

// export const fetchAlarmPostsFaild = (payload: any) => ({
//     type: FETCH_ALARM_POST_FAILED,
//     payload
// });
