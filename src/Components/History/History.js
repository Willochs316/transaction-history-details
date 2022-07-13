import React from 'react';
import CardIcons from '../../Commons/CardIcons';
import Paragraph from '../../Commons/Paragraph';
import { FaBriefcase, FaCcMastercard, FaLongArrowAltUp } from 'react-icons/fa';
import './History.css';

const History = () => {
  return (
    <div className='history-container'>
      <div className='history-header-container'>
        <div className='activity-content'>
          <Paragraph className='activity' content='activity' />
        </div>

        <div className='time-container'>
          <div className='mode-container'>
            <Paragraph className='mode' content='mode' />
          </div>
          <div className='date-container'>
            <Paragraph className='date' content='date' />
          </div>
        </div>

        <div className='amount-container'>
          <Paragraph className='amount' content='amount' />
        </div>
      </div>

      <div className='history-main-content'>
        <div className='history-content'>
          <div className='briefcase'>
            <CardIcons icons={FaBriefcase} className='fa-brief' />
          </div>
          <div className='history-title-container'>
            <Paragraph title='Coorg Trip' className='history-title-class' />
          </div>
        </div>

        <div className='brand-container'>
          <div className='fa-card-content'>
            <CardIcons className='fa-mastercard' icons={FaCcMastercard} />
          </div>

          <div className='brand-date-container'>
            <Paragraph className='date-content' title='12 Jul 2020, 12:30 PM' />
          </div>
        </div>

        <div className='amount-content'>
          <div className='fa-arrowup'>
            <CardIcons icons={FaLongArrowAltUp} className='fa-arrow-icon' />
          </div>

          <div>
            <Paragraph title='$52.9' className='amount-text' />
          </div>
        </div>
      </div>

      <div className='history-main-content'>
        <div className='history-content'>
          <div className='briefcase'>
            <CardIcons icons={FaBriefcase} className='fa-brief' />
          </div>
          <div className='history-title-container'>
            <Paragraph title='Coorg Trip' className='history-title-class' />
          </div>
        </div>

        <div className='brand-container'>
          <div className='fa-card-content'>
            <CardIcons className='fa-mastercard' icons={FaCcMastercard} />
          </div>

          <div className='brand-date-container'>
            <Paragraph className='date-content' title='12 Jul 2020, 12:30 PM' />
          </div>
        </div>

        <div className='amount-content'>
          <div className='fa-arrowup'>
            <CardIcons icons={FaLongArrowAltUp} className='fa-arrow-icon' />
          </div>

          <div>
            <Paragraph title='$52.9' className='amount-text' />
          </div>
        </div>
      </div>

      <div className='history-main-content'>
        <div className='history-content'>
          <div className='briefcase'>
            <CardIcons icons={FaBriefcase} className='fa-brief' />
          </div>
          <div className='history-title-container'>
            <Paragraph title='Coorg Trip' className='history-title-class' />
          </div>
        </div>

        <div className='brand-container'>
          <div className='fa-card-content'>
            <CardIcons className='fa-mastercard' icons={FaCcMastercard} />
          </div>

          <div className='brand-date-container'>
            <Paragraph className='date-content' title='12 Jul 2020, 12:30 PM' />
          </div>
        </div>

        <div className='amount-content'>
          <div className='fa-arrowup'>
            <CardIcons icons={FaLongArrowAltUp} className='fa-arrow-icon' />
          </div>

          <div>
            <Paragraph title='$52.9' className='amount-text' />
          </div>
        </div>
      </div>

      <div className='history-main-content'>
        <div className='history-content'>
          <div className='briefcase'>
            <CardIcons icons={FaBriefcase} className='fa-brief' />
          </div>
          <div className='history-title-container'>
            <Paragraph title='Coorg Trip' className='history-title-class' />
          </div>
        </div>

        <div className='brand-container'>
          <div className='fa-card-content'>
            <CardIcons className='fa-mastercard' icons={FaCcMastercard} />
          </div>

          <div className='brand-date-container'>
            <Paragraph className='date-content' title='12 Jul 2020, 12:30 PM' />
          </div>
        </div>

        <div className='amount-content'>
          <div className='fa-arrowup'>
            <CardIcons icons={FaLongArrowAltUp} className='fa-arrow-icon' />
          </div>

          <div>
            <Paragraph title='$52.9' className='amount-text' />
          </div>
        </div>
      </div>

      <div className='history-main-content'>
        <div className='history-content'>
          <div className='briefcase'>
            <CardIcons icons={FaBriefcase} className='fa-brief' />
          </div>
          <div className='history-title-container'>
            <Paragraph title='Coorg Trip' className='history-title-class' />
          </div>
        </div>

        <div className='brand-container'>
          <div className='fa-card-content'>
            <CardIcons className='fa-mastercard' icons={FaCcMastercard} />
          </div>

          <div className='brand-date-container'>
            <Paragraph className='date-content' title='12 Jul 2020, 12:30 PM' />
          </div>
        </div>

        <div className='amount-content'>
          <div className='fa-arrowup'>
            <CardIcons icons={FaLongArrowAltUp} className='fa-arrow-icon' />
          </div>

          <div>
            <Paragraph title='$52.9' className='amount-text' />
          </div>
        </div>
      </div>

      <div className='history-main-content'>
        <div className='history-content'>
          <div className='briefcase'>
            <CardIcons icons={FaBriefcase} className='fa-brief' />
          </div>
          <div className='history-title-container'>
            <Paragraph title='Coorg Trip' className='history-title-class' />
          </div>
        </div>

        <div className='brand-container'>
          <div className='fa-card-content'>
            <CardIcons className='fa-mastercard' icons={FaCcMastercard} />
          </div>

          <div className='brand-date-container'>
            <Paragraph className='date-content' title='12 Jul 2020, 12:30 PM' />
          </div>
        </div>

        <div className='amount-content'>
          <div className='fa-arrowup'>
            <CardIcons icons={FaLongArrowAltUp} className='fa-arrow-icon' />
          </div>

          <div>
            <Paragraph title='$52.9' className='amount-text' />
          </div>
        </div>
      </div>

      <div className='history-main-content'>
        <div className='history-content'>
          <div className='briefcase'>
            <CardIcons icons={FaBriefcase} className='fa-brief' />
          </div>
          <div className='history-title-container'>
            <Paragraph title='Coorg Trip' className='history-title-class' />
          </div>
        </div>

        <div className='brand-container'>
          <div className='fa-card-content'>
            <CardIcons className='fa-mastercard' icons={FaCcMastercard} />
          </div>

          <div className='brand-date-container'>
            <Paragraph className='date-content' title='12 Jul 2020, 12:30 PM' />
          </div>
        </div>

        <div className='amount-content'>
          <div className='fa-arrowup'>
            <CardIcons icons={FaLongArrowAltUp} className='fa-arrow-icon' />
          </div>

          <div>
            <Paragraph title='$52.9' className='amount-text' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
