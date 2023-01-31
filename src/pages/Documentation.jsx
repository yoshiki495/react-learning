import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../partials/Header';
import ReactContent01 from '../contents/react/ReactContent01';
import ReactContent02 from '../contents/react/ReactContent02';
import ReactContent03 from '../contents/react/ReactContent03';
import ReactContent04 from '../contents/react/ReactContent04';
import ReactContent05 from '../contents/react/ReactContent05';
import NodejsContent01 from '../contents/nodejs/NodejsContent01';
import NodejsContent02 from '../contents/nodejs/NodejsContent02';
import Footer from '../partials/Footer';

function Documentation() {

  const { content } = useParams();

  const dict = {
    "react01": <ReactContent01/>, "react02": <ReactContent02/>, "react03": <ReactContent03/>, "react04": <ReactContent04/>, "react05": <ReactContent05/>,
    "nodejs01": <NodejsContent01/>, "nodejs02": <NodejsContent02/>
  }

  for(let [key, value] of Object.entries(dict)) {
    if (content === key){
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
                  { value }
                </div>
              </div>
            </section>
          </main>
          {/*  Site footer */}
          <Footer />
        </div>
      );
    }
  }
}

export default Documentation;