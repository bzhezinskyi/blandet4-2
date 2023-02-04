import { useEffect } from 'react';

import { RemoveScroll } from 'react-remove-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default function Modal({ header, body, footer }) {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  const handleCloseModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      navigate(location?.state?.from ?? '/');
    }
  };

  return (
    <RemoveScroll className="Overlay" onClick={handleCloseModal}>
      <div className=" Modal container ">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header m-2">
              {header}
              <button
                type="btton"
                onClick={handleCloseModal}
                className="btn-close"
              ></button>
            </div>
            <div className="modal-body m-2">{body}</div>
            <div className="modal-footer m-2 ">{footer}</div>
          </div>
        </div>
      </div>
    </RemoveScroll>
  );
}

// Modal.propTypes = {
//   onModal: PropTypes.shape({
//     largeImageURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//   }).isRequired,
//   onCloseModal: PropTypes.func.isRequired,
// };
