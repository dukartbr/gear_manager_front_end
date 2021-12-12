import axios from "axios";
import { useMutation } from "react-query";

export const useUserLogin = async () => {
    const useLogin = useMutation(
        async ({ email, password }: { email: string; password: string }) => {
            const err = await axios.post(
                "http://localhost:8000/api/login",
                {
                    email,
                    password,
                },
                {
                    headers: {
                        "content-type": "application/json",
                    },
                }
            );
            return err;
        }
    );
    return useLogin;
};

export function useRegister() {}
