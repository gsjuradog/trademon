import React from 'react';
import DMSummaryTile from '../tileComponents/myProfileTileComponents/dmSummaryTile';
import '../../styling/containers.scss';

export default function DMPage() {
  return (
    <div className="dm-page">
      <div className="dm-container">
        <DMSummaryTile></DMSummaryTile>
        <DMSummaryTile></DMSummaryTile>
        <DMSummaryTile></DMSummaryTile>
        <DMSummaryTile></DMSummaryTile>
        <DMSummaryTile></DMSummaryTile>
      </div>
    </div>
  );
}
