import {
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_FAIL,
  CONTACT_CREATE_REQUEST,
  CONTACT_CREATE_SUCCESS,
  CONTACT_CREATE_FAIL,
  CONTACT_DETAILS_REQUEST,
  CONTACT_DETAILS_SUCCESS,
  CONTACT_DETAILS_FAIL,
  CONTACT_DELETE_REQUEST,
  CONTACT_DELETE_SUCCESS,
  CONTACT_DELETE_FAIL,
  CONTACT_UPDATE_REQUEST,
  CONTACT_UPDATE_SUCCESS,
  CONTACT_UPDATE_FAIL,
} from "../constants/contactConstants";
import axios from "axios";
import { logout } from "../actions/user.actions";

const req =
  process.env.NODE_ENV === "production"
    ? `${process.env.REACT_APP_REQUEST_URL}api/contacts`
    : `http://localhost:3001/api/contacts`;

export const listContacts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CONTACT_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${req}`, config);

    dispatch({
      type: CONTACT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getContactDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CONTACT_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${req}/${id}`, config);
    dispatch({
      type: CONTACT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createContact =
  (name, phone, email, message) => async (dispatch) => {
    try {
      dispatch({ type: CONTACT_CREATE_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${req}`,
        {
          name,
          phone,
          email,
          message,
        },
        config
      );

      dispatch({
        type: CONTACT_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteContact = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CONTACT_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`${req}/${id}`, config);

    dispatch({ type: CONTACT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: CONTACT_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateContact = (contact) => async (dispatch, getState) => {
  try {
    dispatch({ type: CONTACT_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`${req}/${contact._id}`, contact, config);

    dispatch({
      type: CONTACT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
