import client from "@/plugin/client";

//sample data
const getSampleData = async () => {
    const url = "/esgResultReport/details?evalYearSeq=1002&type=gradeChange";
    const response = await client.get(url);

    return response.data;
};

export { getSampleData };
