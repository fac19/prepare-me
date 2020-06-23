function uploadImageHandler(e, pageNumber, dispatch) {
  const fieldName = e.currentTarget.id;

  window.cloudinary.openUploadWidget(
    {
      cloudName: 'prepareme',
      uploadPreset: 'ru2kdjzc',
      sources: ['local', 'image_search', 'url', 'google_drive', 'facebook'],
      googleApiKey: process.env.REACT_APP_googleAPIkey,
      cropping: true,
      multiple: false,
      defaultSource: 'local',
      styles: {
        palette: {
          window: '#F5F5F5',
          sourceBg: '#FFFFFF',
          windowBorder: '#90a0b3',
          tabIcon: '#0EB5BB',
          inactiveTabIcon: '#69778A',
          menuIcons: '#0094C7',
          link: '#0EB5BB',
          action: '#FBB03B',
          inProgress: '#0194c7',
          complete: '#0EB5BB',
          error: '#c43737',
          textDark: '#000000',
          textLight: '#FFFFFF',
        },
      },
    },

    (error, result) => {
      if (!error && result && result.event === 'success') {
        const url = result.info.url;
        dispatch({ type: 'upload image', url, fieldName, pageNumber });
      }
    },
  );
}
export default uploadImageHandler;
