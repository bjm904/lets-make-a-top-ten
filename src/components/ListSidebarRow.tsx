import React, { ReactElement, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';

import ListSidebarCandidate from './ListSidebarCandidate';
import { StateContext } from '../store';

const useStyles = createUseStyles({
  root: {
    height: '100%',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  slotIdentifier: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    fontSize: 'large',
  },
  candidatesContainer: {
    height: '100%',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    display: 'flex',
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
      <div className={classes.candidatesContainer}>
        {slotCandidates.map((candidateId) => (
          <ListSidebarCandidate candidateId={candidateId} key={candidateId} />
        ))}
      </div>
    </div>
  );
}

ListSidebarRow.propTypes = propTypes;

export default observer(ListSidebarRow);
