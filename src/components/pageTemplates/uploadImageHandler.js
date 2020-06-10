function uploadImageHandler(e, pageNumber, dispatch) {
  const fieldName = e.currentTarget.id;

  window.cloudinary.openUploadWidget(
    {
      cloudName: 'prepareme',
      uploadPreset: 'ru2kdjzc',
      cropping: true,
      sources: ['local', 'url', 'image_search', 'facebook', 'google_drive'],
      // googleApikey: searchBySites: [array of strings]
      //   styles: {
      //     palette: {
      //   window: "#FFF",
      //   windowBorder: "#90A0B3",
      //   tabIcon: "#0E2F5A",
      //   menuIcons: "#5A616A",
      //   textDark: "#000000",
      //   },
      // },
    },
    (error, result) => {
      if (!error && result && result.event === 'success') {
        console.log(result.info);
        const url = result.info.url;
        console.log(url);
        dispatch({ type: 'upload image', url, fieldName, pageNumber });
      }
    },
  );
}

export default uploadImageHandler;
