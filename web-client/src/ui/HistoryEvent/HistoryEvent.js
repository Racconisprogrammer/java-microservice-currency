import React from 'react'
import { Card, Descriptions } from 'antd'

const DescriptionItem = Descriptions.Item;

const exchangeCaption = (amount) => (amount >= 0 ? 'From account' : 'To account');

const HistoryEvent = ({ event }) => (
    <Card style={{ width: 600 }}>
        <Descriptions title={"Operation " + event.operation} column={2}>
            <DescriptionItem label="Amount" > { event.amount + " " +  event.currency} </DescriptionItem>
            <DescriptionItem label="Created" > { event.created } </DescriptionItem>
            {
                event.fromAccount &&
                    <DescriptionItem label={exchangeCaption(event.amount)} >
                        { "#" + event.fromAccount }
                    </DescriptionItem>
            }
        </Descriptions>
    </Card>
);

export default HistoryEvent;
