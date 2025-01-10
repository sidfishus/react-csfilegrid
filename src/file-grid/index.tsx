
import {ReactNode} from "react";
import "./index.scss";

export type FileGridProps = {
    fileDir?: string;
    files: string[];
    onClick?: (fileIndex: number)=>void;
    overrideFileClass?: (isSelected: boolean) => string;
    selectedIndex?: number;
    overrideFileGridContainerClass?: string;
}

export const FileGrid = (props: FileGridProps) => {

    const { files, overrideFileClass, selectedIndex, overrideFileGridContainerClass } = props;

    const getFileClass = (isSelected: boolean): string => {
        if(overrideFileClass)
            return overrideFileClass(isSelected);

        return isSelected ? "FileGridSelectedFile" : "FileGridFile";
    }

    const fileList: ReactNode[]=[];
    for(let i=0;i<files.length; ++i) {
        const file=files[i];

        const onClick = props.onClick
            ? ()=>props.onClick!(i)
            : undefined;

        fileList.push((
            <img className={getFileClass(selectedIndex != undefined && i == selectedIndex)}
                src={FileFullUrl(props,file)} key={i}
                loading="lazy"
                onClick={onClick}
            />
        ));
    }

    return (
        <div className={(overrideFileGridContainerClass ? overrideFileGridContainerClass : "FileGridContainer")}>
            {fileList}
        </div>
    );
}

function FileFullUrl(props: FileGridProps, fileSrc: string): string {
    if(props.fileDir)
        return props.fileDir + fileSrc;

    return fileSrc;
}