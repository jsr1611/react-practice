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
    }, []);
}

export default useAxiosInterceptor;
