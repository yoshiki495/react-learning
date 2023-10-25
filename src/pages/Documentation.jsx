import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../partials/Header';
import JavaScriptContent00 from '../contents/javascript/JavaScriptContent00';
import JavaScriptContent01 from '../contents/javascript/JavaScriptContent01';
import JavaScriptContent02 from '../contents/javascript/JavaScriptContent02';
import JavaScriptContent03 from '../contents/javascript/JavaScriptContent03';
import JavaScriptContent04 from '../contents/javascript/JavaScriptContent04';
import NodejsContent01 from '../contents/nodejs/NodejsContent01';
import NodejsContent02 from '../contents/nodejs/NodejsContent02';
import NodejsContent03 from '../contents/nodejs/NodejsContent03';
import NodejsContent04 from '../contents/nodejs/NodejsContent04';
import TypeScriptContent01 from '../contents/typescript/TypeScriptContent01';
import TypeScriptContent02 from '../contents/typescript/TypeScriptContent02';
import TypeScriptContent03 from '../contents/typescript/TypeScriptContent03';
import TypeScriptContent04 from '../contents/typescript/TypeScriptContent04';
import ReactContent01 from '../contents/react/ReactContent01';
import ReactContent02 from '../contents/react/ReactContent02';
import ReactContent03 from '../contents/react/ReactContent03';
import ReactContent04 from '../contents/react/ReactContent04';
import ReactContent05 from '../contents/react/ReactContent05';
import NextjsContent01 from '../contents/nextjs/NextjsContent01';
import NextjsContent02 from '../contents/nextjs/NextjsContent02';
import NextjsContent03 from '../contents/nextjs/NextjsContent03';
import NextjsContent04 from '../contents/nextjs/NextjsContent04';
import NextjsContent05 from '../contents/nextjs/NextjsContent05';
import Footer from '../partials/Footer';
import PageNotFound from './PageNotFound';

function Documentation() {

  const { content } = useParams();

  const dict = {
    "javascript00": <JavaScriptContent00 />, "javascript01": <JavaScriptContent01 />, "javascript02": <JavaScriptContent02 />, "javascript03": <JavaScriptContent03 />, "javascript04": <JavaScriptContent04 />,
    "nodejs01": <NodejsContent01 />, "nodejs02": <NodejsContent02 />, "nodejs03": <NodejsContent03 />, "nodejs04": <NodejsContent04 />,
    "typescript01": <TypeScriptContent01 />, "typescript02": <TypeScriptContent02 />, "typescript03": <TypeScriptContent03 />, "typescript04": <TypeScriptContent04 />,
    "react01": <ReactContent01 />, "react02": <ReactContent02 />, "react03": <ReactContent03 />, "react04": <ReactContent04 />, "react05": <ReactContent05 />,
    "nextjs01": <NextjsContent01 />, "nextjs02": <NextjsContent02 />, "nextjs03": <NextjsContent03 />, "nextjs04": <NextjsContent04 />,
  }

  for (let [key, value] of Object.entries(dict)) {
    if (content === key) {
      return (
        <div className="flex flex-col min-h-screen overflow-hidden">
          {/*  Site header */}
          <Header />
          {/*  Page content */}
          <main className="grow">
            <section>
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                  {/* Main content */}
                  {value}
                </div>
              </div>
            </section>
          </main>
          {/*  Site footer */}
          {/* <Footer /> */}
        </div>
      );
    }
  }
  return (
    <PageNotFound />
  )
}

export default Documentation;