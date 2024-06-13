"use client"

import { MainTable } from "@/components/table";
import MultipleFileUploader from "@/components/upload-file";

function App() {

    return (
        <>
            <MultipleFileUploader />
            <MainTable />
        </>
    );
}

export default App;