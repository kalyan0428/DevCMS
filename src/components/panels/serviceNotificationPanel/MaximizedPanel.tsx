import { useState } from "react";
import { FocusZone, FocusZoneDirection } from "@fluentui/react/lib/FocusZone";
import { List } from "@fluentui/react/lib/List";
import { Text } from "@fluentui/react/lib/Text";
import { Stack } from "@fluentui/react/lib/Stack";
import {
  classNames,
  CloseLeftarrow,
  UpArrow,
  RoundButton,
  SearchIcon,
  TrainSvg,
  DummyData,
} from "./";

const MaximizedPanel = (props : any) => {
  const {
    maximizedPanel,
    maximizedPanelOpen,
    maximizedPanelClose,
    leftArrowClose,
    arrowRotation,
    panelHeaderContainer,
    searchIcon,
    cardsParent,
    card,
    cardHeaderContainer,
    cardBody,
    cardBottom,
    labelWidth,
    labelWidth2,
  } = classNames;
  const [anim, setAnim] = useState(maximizedPanelOpen);

  const animHandler = () => {
    setAnim(maximizedPanelClose);
    setTimeout(() => props.servicePanelHandler(), 0);
  };

  interface CardList {
    text1: string;
    text2: string;
    date: string;
    time: string;
    text3: string;
    text5: string;
  }
  const onRenderCell = (
    item: CardList | undefined,
    index: number | undefined
  ): JSX.Element => {
    return (
      <div className={card} onClick={()=>{
        props.servicePaneldata(item)
        
      }}>
        <div className={cardHeaderContainer}>
          <ul>
            <li>
              <Stack>
                <Text nowrap={true} className={labelWidth}>
                  {item?.text1}
                </Text>
              </Stack>
            </li>
            <li>
              <Stack>
                <Text nowrap className={labelWidth}>
                  {item?.text2}
                </Text>
              </Stack>
            </li>
          </ul>
          <ul>
            <li>{item?.date}</li>
            <li>{item?.time}</li>
          </ul>
        </div>
        <div className={cardBody}>{item?.text3}</div>
        <div className={cardBottom}>
          <div>
            <TrainSvg />
            <div>
              <Stack>
                <Text nowrap className={labelWidth2}>
                  {item?.text5}
                </Text>
              </Stack>
            </div>
          </div>
          <ul>
            <li>OPEN</li>
            <li>TOP</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <section className="ms-Grid">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-xl11 ms-xxl11 ms-xxxl11">
        <div className={[maximizedPanel, anim].join(" ")}>
  
      <div className={panelHeaderContainer}>
        <h3>Unsubmitted Service Notifications</h3>
        <SearchIcon className={searchIcon} />
        <RoundButton text="Show All" />
      </div>
      <div className={cardsParent}>
        <FocusZone direction={FocusZoneDirection.vertical}>
          <List items={DummyData} onRenderCell={onRenderCell} />
        </FocusZone>
      </div>
    </div>
        </div>
        <div className="ms-Grid-col ms-xl1 ms-xxl1 ms-xxxl1 leftArrow">
        <UpArrow className={[leftArrowClose, arrowRotation].join(" ")} onClick={animHandler} />
          </div>
      </div>
    
    </section>
  );
};

export default MaximizedPanel;
