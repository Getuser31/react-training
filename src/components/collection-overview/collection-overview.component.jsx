import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import './collection-overview.styles.scss';
import CollectionPreview from "../collection-preview/collection-preview.component";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";

const CollectionOverview = ({collections})  => (
  <div className='collections-overview'>
    {
      collections.map(({id, ...otherCollectionPros}) => (
        <CollectionPreview key={id} {...otherCollectionPros}/>
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)