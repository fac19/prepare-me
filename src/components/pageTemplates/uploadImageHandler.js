function uploadImageHandler(e, pageNumber, dispatch) {
  const fieldName = e.currentTarget.id;

  window.cloudinary.openUploadWidget(
    {
      cloudName: 'prepareme',
      uploadPreset: 'ru2kdjzc',
      sources: ['local', 'url', 'image_search', 'google_drive', 'facebook'],
      googleApiKey: 'AIzaSyCoy_NII_6Wssms4Z6GHLTyZVJVpgr4Cic',
      // showAdvancedOptions: true,
      cropping: true,
      multiple: false,
      defaultSource: 'local',
      styles: {
        palette: {
          window: '#F5F5F5',
          sourceBg: '#FFFFFF',
          windowBorder: '#90a0b3',
          tabIcon: '#0094c7',
          inactiveTabIcon: '#69778A',
          menuIcons: '#0094C7',
          link: '#53ad9d',
          action: '#8F5DA5',
          inProgress: '#0194c7',
          complete: '#53ad9d',
          error: '#c43737',
          textDark: '#000000',
          textLight: '#FFFFFF',
        },
        // fonts: {
        //   'default': null,
        //   "'Poppins', sans-serif": {
        //     url: 'https://fonts.googleapis.com/css?family=Poppins',
        //     active: true,
        //   },
      },
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
