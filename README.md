# react-csfilegrid

A re-usable responsive React file grid component.

Example useage:
- Display a list of thumbnails.

# To install:
npm install --save-dev react-csfilegrid

# props
- files: string[]: The source list of files to display in the grid.
- fileDir?: string: The source directory of the files. If specified, this is prefixed to each file source for brevity.
- onClick?: (fileIndex: number)=>void: Callback for when an image is selected.
- selectedIndex?: number: The index of the selected file.
- overrideFileGridContainerClass?: string: Override the class used in the file grid containing div. See .FileGridContainer for the default styles.
- overrideFileClass?: string: Override the class used for the individual files. See .FileGridFile and .FileGridSelectedFile for the default styles.

# Example
- See https://github.com/sidfishus/react-cscarousel/blob/main/src/TestApp.tsx
- See TestApp.tsx in this repository.
