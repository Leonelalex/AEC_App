import axios from "axios";

export const downloadFile = (url, label) => {

    axios.get(url, {responseType: "blob"})
    .then((response) => {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = label;
        link.click();
        URL.revokeObjectURL(link.href);
    })
    .catch(console.error);
}