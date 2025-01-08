# react-csfilegrid

A re-usable responsive React file grid component.

Example useage:
- Display a list of thumbnails. Recommended to be used alongside react-cscarousel: https://github.com/sidfishus/react-cscarousel

# To install:
npm install --save-dev react-csfilegrid

# props
- **files**: *string[]*: The source list of files to display in the grid.
- **fileDir?**: *string*: The source directory of the files. If specified, this is prefixed to each file source for brevity.
- **onClick?**: *(fileIndex: number)=>void*: Callback for when an image is selected.
- **selectedIndex?**: *number*: The index of the selected file.
- **overrideFileGridContainerClass?**: *string*: Override the class used in the file grid containing div. See .FileGridContainer for the default styles.
- **overrideFileClass?**: *string*: Override the class used for the individual files. See .FileGridFile and .FileGridSelectedFile for the default styles.

# Example
- See https://github.com/sidfishus/react-cscarousel/blob/main/src/TestApp.tsx
- See TestApp.tsx in this repository.

Index.tsx
```
<FileGrid
    fileDir={"/src/images/"}
    files={["carouselmobile1.png","ailist1.jpg","ailist2.jpg"]}
    selectedIndex={1}
    overrideFileClass={(isSelected)=>
        (isSelected ? "PortfolioFileGridSelectedFile" : "PortfolioFileGridFile")}
/>
```
Index.scss
```
.PortfolioFileGridFile {

  width: 100px;
  height: 100px;

  border-radius: 5px;

  border: white solid 1.5px;
  box-shadow: 0 0 0 1px black;
  margin: 10px;

  cursor: pointer;

  object-fit: contain;
}

.PortfolioFileGridSelectedFile {
  @extend .PortfolioFileGridFile;

  box-shadow: 0 0 0 4px black;
  cursor: default;
}
```

Produces:

![Simple File Grid](https://github.com/sidfishus/react-csfilegrid/blob/master/simple-file-grid.png)
