/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate
 *
 * @version
 * 2.1.364 (October 15 2009)
 * 
 * @copyright
 * Copyright (C) 2004-2009 Alex Gorbatchev.
 *
 * @license
 * This file is part of SyntaxHighlighter.
 * 
 * SyntaxHighlighter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * SyntaxHighlighter is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with SyntaxHighlighter.  If not, see <http://www.gnu.org/copyleft/lesser.html>.
 */
dp.sh.Brushes.Jalv2 = function()
{
	var keywords =	'alias array as assembler at bit byte sbyte word sword dword sdword block ' +
					'case char const do ' +
					'else elsif end false ' +
					'for forever function goto high if include input in ' +
					'is label library loop low mod nil no not object ' +
					'of off on or out output packed ' +
					'pointer pragma private procedure program  ' +
					'protected public ' +
					'return repeat set shl shortint shortstring shr single smallint string then ' +
					'target to true type until var while ' +
					'with ';
		
	this.regexList = [
		{ regex: new RegExp('\\(\\*[\\s\\S]*?\\*\\)', 'gm'),	css: 'comment' },  			// multiline comments (* *)
		{ regex: new RegExp('{(?!\\$)[\\s\\S]*?}', 'gm'),			css: 'comment' },  			// multiline comments { }
		{ regex: new RegExp('--.*$', 'gm'),	                  css: 'comment' }, // one line
		{ regex: dp.sh.RegexLib.DoubleQuotedString,					  css: 'string' },			// strings
		{ regex: new RegExp('\\{\\$[a-zA-Z]+ .+\\}', 'g'),		css: 'directive' },			// Compiler Directives and Region tags
		{ regex: new RegExp('\\b[\\d\\.]+\\b', 'g'),				  css: 'number' },			// numbers 12345
		{ regex: new RegExp('\\$[a-zA-Z0-9]+\\b', 'g'),				css: 'number' },			// numbers $F5D3
		{ regex: new RegExp('\\0b[a-zA-Z0-9]+\\b', 'g'),				css: 'number' },			// numbers 0b0110		 
		{ regex: new RegExp(this.GetKeywords(keywords), 'gm'),css: 'keyword' }			// keyword
		];

	this.CssClass = 'dp-jalv2';
	this.Style =	'.dp-jalv2 .number { color: blue; }' +
					'.dp-jalv2 .directive { color: #008284; }' +
					'.dp-jalv2 .vars { color: #000; }';		

};
dp.sh.Brushes.Jalv2.prototype	= new dp.sh.Highlighter();
dp.sh.Brushes.Jalv2.Aliases	= ['jalv2', 'jallib', 'jal'];
