import "./interceptors/request-interceptor";
import "./interceptors/response-interceptor";
import HttpClient from "./http-client";

export default resource => new HttpClient(resource);
