import axios from "axios";
import { useEffect, useState } from "react";
import { Problem } from "../interfaces/BytecodeInterface";
export default function useProblemset() {
    const [problems, setProblems] = useState<Problem[]>([])
    useEffect(() => {
        const getProblems = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/problemset`)
                setProblems(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProblems()
    }, [])
    return problems;
}