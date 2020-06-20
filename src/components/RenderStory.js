import React from 'react';
import {
  PDFDownloadLink,
  Page,
  Image,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import SiteContext from '../model/SiteContext';
import { Typography } from '@material-ui/core';
import font from '../fonts/ShortStack-Regular.ttf';
// import Landscape1 from './pageTemplates/Landscape1';

/* 
    This is the code for rendering a PDF and creating a download link. Initially we had hoped to find a React module that would just render an arbitrary React component to a PDF page. Sadly there doesn't seem to be such a free npm module. there is a commercial module that looks like it might do what we want (KendoReact) but it is pretty expensive to license ($900 per seat). In the meantime we have React-PDF (https://github.com/diegomura/react-pdf) which only allows PDF's to be created using a small subset of primitives it supplies (<Page>, <View>, <Image>, <Text> etc). As we can't use our existing template components directly our stopgap solution has been to try and recreate each template's layout using the supplied primitives and CSS. This has not proved to be straightforward, nor will it scale well as more templates are required.

    Possible alternatives might be 1) See if we can modify our page templates to use the react-pdf primitives instead so we are not duplicating effort. 2) Investigate rendering components to an intermediate graphical format like SVG or PNG and then passing those into react-pdf as images. 3) Forking out for Kendo.
*/

Font.register({
  family: 'Short Stack',
  src: font,
  fontStyle: 'normal',
  fontWeight: 'normal',
});

const styles = StyleSheet.create({
  page: {
    // flexDirection: 'row',
    backgroundColor: '#fff',
  },
  section: {
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  sectionP: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  pdf: {
    textDecoration: 'none',
    color: 'black',
  },

  storyText: {
    fontFamily: 'Short Stack',
    fontSize: '26pt',
    width: '80vw',
    maxHeight: '40vh',
    marginBottom: '10px',
    marginLeft: '10px',
  },

  storyImage: {
    maxHeight: '40vh',
    objectFit: 'contain',
    marginBottom: '10px',
  },
});

// Create Document Component
const MyDocument = ({ state }) => {
  // Use all pages in here! (need to pass state in)
  const pages = [];

  state.pages.forEach((page, index) => {
    console.log(page);
    pages.push(
      <Page size="A4" style={styles.page} key={index} wrap={false}>
        <View
          style={
            page.pageTemplate === 'Portrait2' ? styles.sectionP : styles.section
          }
        >
          <Image src={page.fields.pic1} style={styles.storyImage}></Image>
          <Text style={styles.storyText}> {page.fields.text1} </Text>
          {page.pageTemplate === 'Landscape2' ? (
            <>
              <Image src={page.fields.pic2} style={styles.storyImage}></Image>
              <Text style={styles.storyText}> {page.fields.text2} </Text>
            </>
          ) : null}
        </View>
        {page.pageTemplate === 'Portrait2' ? (
          <View style={styles.sectionP}>
            <Image src={page.fields.pic2} style={styles.storyImage}></Image>
            <Text style={styles.storyText}> {page.fields.text2} </Text>
          </View>
        ) : null}
      </Page>,
    );
  });
  return <Document>{pages}</Document>;
};

function RenderStory({ hasPressedDownload }) {
  const [state] = React.useContext(SiteContext);

  if (hasPressedDownload)
    return (
      <PDFDownloadLink
        style={styles.pdf}
        document={<MyDocument state={state} />}
        fileName="prepare-me-story.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? (
            <Typography>'Loading document...' </Typography>
          ) : (
            <Typography>Download</Typography>
          )
        }
      </PDFDownloadLink>
    );
  return null;
}

export default RenderStory;
