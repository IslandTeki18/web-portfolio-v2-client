import axios from "axios";
import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECT_DELETE_FAIL,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_UPDATE_FAIL,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_DETAILS_FAIL,
  PROJECT_CREATE_FEEDBACK_REQUEST,
  PROJECT_CREATE_FEEDBACK_SUCCESS,
  PROJECT_CREATE_FEEDBACK_FAIL,
  PROJECT_DELETE_FEEDBACK_REQUEST,
  PROJECT_DELETE_FEEDBACK_SUCCESS,
  PROJECT_DELETE_FEEDBACK_FAIL,
} from "../constants/projectConstants";
import { logout } from "../actions/user.actions";

const req =
  process.env.NODE_ENV === "production"
    ? `${process.env.REACT_APP_REQUEST_URL}api/projects`
    : `http://localhost:3001/api/projects`;

export const listProjects = () => async (dispatch) => {
  try {
    dispatch({
      type: PROJECT_LIST_REQUEST,
    });
    const { data } = await axios.get(`${req}`);
    dispatch({
      type: PROJECT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const limitedProjects = () => async (dispatch) => {
  try {
    dispatch({
      type: PROJECT_LIST_REQUEST,
    });
    const { data } = await axios.get(`${req}/limited`);
    dispatch({
      type: PROJECT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProjectDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PROJECT_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`${req}/${id}`);
    dispatch({
      type: PROJECT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createNewProject = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_CREATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`${req}`, {}, config);

    dispatch({
      type: PROJECT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProject = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_DELETE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`${req}/${id}`, config);
    dispatch({
      type: PROJECT_DELETE_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PROJECT_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateProject = (project) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_UPDATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`${req}/${project._id}`, project, config);
    dispatch({
      type: PROJECT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PROJECT_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const createDeveloperFeedback =
  (projectId, feedbackObj) => async (dispatch, getState) => {
    try {
      dispatch({ type: PROJECT_CREATE_FEEDBACK_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `${req}/${projectId}/feedback`,
        feedbackObj,
        config
      );
      dispatch({
        type: PROJECT_CREATE_FEEDBACK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: PROJECT_CREATE_FEEDBACK_FAIL,
        payload: message,
      });
    }
  };

export const deleteDeveloperFeedback =
  (projectId, feedbackId) => async (dispatch, getState) => {
    try {
      dispatch({ type: PROJECT_DELETE_FEEDBACK_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.delete(
        `${req}/${projectId}/${feedbackId}`,
        config
      );
      dispatch({
        type: PROJECT_DELETE_FEEDBACK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: PROJECT_DELETE_FEEDBACK_FAIL,
        payload: message,
      });
    }
  };
