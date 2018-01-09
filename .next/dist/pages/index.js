'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../comps/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Volumes/DATA/work/react/hello-next/pages/index.js?entry';


function getPosts() {
  return [{ id: 'hello-nextjs', title: 'Hello Next.js' }, { id: 'learn-nextjs', title: 'Learn Next.js is awesome' }, { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_link2.default, { as: '/p/' + post.id, href: '/post?title=' + post.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, post.title)));
};

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-2987328901',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'My Blog'), _react2.default.createElement('ul', {
    className: 'jsx-2987328901',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, getPosts().map(function (post) {
    return _react2.default.createElement(PostLink, { key: post.id, post: post, __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    });
  })), _react2.default.createElement(_style2.default, {
    styleId: '2987328901',
    css: 'h1.jsx-2987328901,a.jsx-2987328901{font-family:"Arial";}ul.jsx-2987328901{padding:0;}li.jsx-2987328901{list-style:none;margin:5px 0;}a.jsx-2987328901{text-decoration:none;color:blue;}a.jsx-2987328901:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZ0IsQUFHNkIsQUFJVixBQUlNLEFBS0ssQUFLVCxVQWJkLEVBY0EsSUFWZSxJQVJmLENBYWEsUUFKYixHQUtBIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL0RBVEEvd29yay9yZWFjdC9oZWxsby1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wcy9MYXlvdXQuanMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmZ1bmN0aW9uIGdldFBvc3RzICgpIHtcbiAgcmV0dXJuIFtcbiAgICB7IGlkOiAnaGVsbG8tbmV4dGpzJywgdGl0bGU6ICdIZWxsbyBOZXh0LmpzJ30sXG4gICAgeyBpZDogJ2xlYXJuLW5leHRqcycsIHRpdGxlOiAnTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lJ30sXG4gICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCd9LFxuICBdXG59XG5cbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gIDxsaT5cbiAgICA8TGluayBhcz17YC9wLyR7cG9zdC5pZH1gfSBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwb3N0LnRpdGxlfWB9PlxuICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgIDwvTGluaz5cbiAgPC9saT5cbilcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMT5NeSBCbG9nPC9oMT5cbiAgICA8dWw+XG4gICAgICB7Z2V0UG9zdHMoKS5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0vPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSwgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKSJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIkxpbmsiLCJnZXRQb3N0cyIsImlkIiwidGl0bGUiLCJQb3N0TGluayIsInBvc3QiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7Ozs7OztBQUVQLFNBQUEsQUFBUyxXQUFZLEFBQ25CO1NBQU8sQ0FDTCxFQUFFLElBQUYsQUFBTSxnQkFBZ0IsT0FEakIsQUFDTCxBQUE2QixtQkFDN0IsRUFBRSxJQUFGLEFBQU0sZ0JBQWdCLE9BRmpCLEFBRUwsQUFBNkIsOEJBQzdCLEVBQUUsSUFBRixBQUFNLGlCQUFpQixPQUh6QixBQUFPLEFBR0wsQUFBOEIsQUFFakM7OztBQUVELElBQU0sV0FBVyxTQUFYLEFBQVcsZUFBQTtNQUFBLEFBQUcsWUFBSCxBQUFHO3lCQUNsQixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsZ0NBQUssWUFBVSxLQUFoQixBQUFxQixJQUFNLHVCQUFxQixLQUFoRCxBQUFxRDtnQkFBckQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLFVBSFcsQUFDZixBQUNFLEFBQ0UsQUFBUztBQUhmLEFBUUE7O2tCQUFlLFlBQUE7eUJBQ2IsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSw0QkFBQSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLGdCQUNHLEFBQVcsSUFBSSxVQUFBLEFBQUMsTUFBRDt5Q0FDZCxBQUFDLFlBQVMsS0FBSyxLQUFmLEFBQW9CLElBQUksTUFBeEIsQUFBOEI7a0JBQTlCO29CQURjLEFBQ2Q7QUFBQTtLQUFBO0FBSk4sQUFFRSxBQUNHO2FBSEw7U0FEYSxBQUNiO0FBQUE7QUFERiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9EQVRBL3dvcmsvcmVhY3QvaGVsbG8tbmV4dCJ9