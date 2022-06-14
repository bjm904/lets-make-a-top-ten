import React, { ReactElement, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';

import ListSidebarCandidate from './ListSidebarCandidate';
import { StateContext } from '../store';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
  },
  slotIdentifier: {
    fontSize: 'large',
  },
});

const propTypes = {
  slotIndex: PropTypes.number.isRequired,
  slotType: PropTypes.oneOf(['slot', 'mention']).isRequired,
};

type ListSidebarRowProps = PropTypes.InferProps<typeof propTypes>;

function ListSidebarRow({ slotType, slotIndex }: ListSidebarRowProps): ReactElement {
  const classes = useStyles();
  const store = useContext(StateContext);

  const slotCandidates = slotType === 'slot' ? (
    store.activeList.slots[slotIndex]
  ) : (
    store.activeList.mentions[slotIndex]
  );

  return (
    <div className={classes.root}>
      {slotType === 'slot' ? (
        <div className={classes.slotIdentifier}>
          {slotIndex + 1}
        </div>
      ) : (
        <div className={classes.slotIdentifier}>
          HM
        </div>
      )}
      {slotCandidates.map((candidateId) => (
        <ListSidebarCandidate candidateId={candidateId} key={candidateId} />
      ))}
    </div>
  );
}

ListSidebarRow.propTypes = propTypes;

export default observer(ListSidebarRow);
