

import "./testapp.scss";
import {FileGrid} from "./file-grid";

export const TestApp = () => {

    return (
        <>
            <ReplicatePortfolioInMobile />
        </>
    );
}

export const ReplicatePortfolioInMobile = () => {

    const thumbnails=["carouselmobile1.png","ailist1.jpg","ailist2.jpg"]

    return (
        <div style={{minWidth: "calc(100%)"}}>

            <FileGrid
                fileDir={"/src/images/"}
                files={thumbnails}
                selectedIndex={1}
                overrideFileClass={(isSelected)=>
                    (isSelected ? "PortfolioFileGridSelectedFile" : "PortfolioFileGridFile")}
            />

        </div>
    );

}