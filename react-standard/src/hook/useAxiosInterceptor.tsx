import client from "@/plugin/client";
import { useEffect } from "react";

/**
 * @description async interceptor hook
 */
function useAxiosInterceptor() {
    useEffect(() => {
        // req
        const reqInterceptor = client.interceptors.request.use(
            (config) => {
                console.log("async request");

                return config;
            },
            (error) => {
                console.log("async request error");

                Promise.reject(error);
            }
        );

        // resp
        const respInterceptor = client.interceptors.response.use(
            (config) => {
                console.log("async response");

                return config;
            },
            (error) => {
                console.log("async response error");

                Promise.reject(error);
            }
        );

        //clean-up
        return () => {
            client.interceptors.request.eject(reqInterceptor);
            client.interceptors.response.eject(respInterceptor);
        };
    }, []);
}

export default useAxiosInterceptor;
